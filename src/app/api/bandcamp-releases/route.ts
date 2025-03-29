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
    const response = await fetch(BANDCAMP_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    })
    const html = await response.text()
    const $ = cheerio.load(html)
    const releases: Release[] = []

    // Parse music grid items
    $('.music-grid-item').each(function(index, element) {
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
    return []
  }
}

export async function GET() {
  try {
    // Fetch data directly without caching
    const releases = await fetchBandcampReleases()
    
    return NextResponse.json({ releases })
  } catch (error) {
    return NextResponse.json({ releases: [] }, { status: 500 })
  }
} 