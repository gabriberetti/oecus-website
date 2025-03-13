import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import cheerio from 'cheerio'

const BANDCAMP_URL = 'https://oecus.bandcamp.com'
const CACHE_KEY = 'bandcamp_releases'
const CACHE_DURATION = 3600 // 1 hour in seconds

interface Release {
  title: string
  artist: string
  artwork: string
  url: string
  releaseDate: string
  price?: string
}

async function fetchBandcampReleases(): Promise<Release[]> {
  try {
    const response = await fetch(BANDCAMP_URL)
    const html = await response.text()
    const $ = cheerio.load(html)
    const releases: Release[] = []

    // Parse music grid items
    $('.music-grid-item').each((_, element) => {
      const $el = $(element)
      const title = $el.find('.title').text().trim()
      const artist = $el.find('.artist-override').text().trim()
      const artwork = $el.find('img').attr('src') || ''
      const url = $el.find('a').attr('href') || ''
      const releaseDate = $el.find('.release-date').text().trim()
      const price = $el.find('.price').text().trim()

      releases.push({
        title,
        artist,
        artwork,
        url,
        releaseDate,
        price
      })
    })

    return releases
  } catch (error) {
    console.error('Error fetching Bandcamp releases:', error)
    return []
  }
}

export async function GET() {
  try {
    // Try to get cached data first
    let releases = await kv.get<Release[]>(CACHE_KEY)

    // If no cached data or cache expired, fetch new data
    if (!releases) {
      releases = await fetchBandcampReleases()
      
      // Cache the results if we got any
      if (releases.length > 0) {
        await kv.set(CACHE_KEY, releases, { ex: CACHE_DURATION })
      }
    }

    return NextResponse.json({ releases })
  } catch (error) {
    console.error('Error in Bandcamp releases API:', error)
    return NextResponse.json({ releases: [] }, { status: 500 })
  }
} 