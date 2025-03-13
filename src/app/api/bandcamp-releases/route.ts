import { NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

const BANDCAMP_URL = 'https://oecus.bandcamp.com'

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
    $('.music-grid-item').each((index: number, element: any) => {
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
    // Fetch data directly without caching
    const releases = await fetchBandcampReleases()
    
    return NextResponse.json({ releases })
  } catch (error) {
    console.error('Error in Bandcamp releases API:', error)
    return NextResponse.json({ releases: [] }, { status: 500 })
  }
} 