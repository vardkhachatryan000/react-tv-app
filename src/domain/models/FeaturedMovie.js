import secondsToHoursMinutes from '../utils/dateUtils.js';

export class FeaturedMovie {
  constructor({ id, title, description, coverImage, logo, category, releaseYear, rating, duration, videoUrl, date }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.coverImage = coverImage;
    this.logo = logo;
    this.category = category;
    this.releaseYear = releaseYear;
    this.rating = rating;
    this.duration = duration;
    this.videoUrl = videoUrl;
    this.date = date;
  }
}

export function mapToDomain(movie) {
  return new FeaturedMovie({
    id: movie.id,
    title: movie.title,
    coverImage: movie.coverImage,
    logo: movie.logo,
    category: movie.category,
    releaseYear: movie.releaseYear,
    rating: movie.rating,
    duration: secondsToHoursMinutes(movie.duration),
    videoUrl: movie.videoUrl,
    description: movie.description,
    date: movie.date
  });
}