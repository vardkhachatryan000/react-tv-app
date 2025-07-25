
export class Movie {
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
  return new Movie({
    id: movie.id,
    title: movie.title,
    coverImage: movie.coverImage,
    logo: movie.logo,
    category: movie.category,
    releaseYear: movie.releaseYear,
    rating: movie.rating,
    duration: movie.duration,
    videoUrl: movie.videoUrl,
    description: movie.description,
    date: movie.date
  });
}

