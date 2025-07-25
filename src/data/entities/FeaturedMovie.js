export class FeaturedMovieData {
  constructor({ id, title, description, coverImage, logo, category, releaseYear, rating, duration, date }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.coverImage = coverImage;
    this.logo = logo;
    this.category = category;
    this.releaseYear = releaseYear;
    this.rating = rating;
    this.duration = duration;
    this.date = date;
  }
}

export function mapToData(json) {
  return new FeaturedMovieData({
    id: json.Id,
    title: json.Title,
    titleImage: json.TitleImage,
    coverImage: json.CoverImage,
    titleImage: json.TitleImage,
    date: json.Date,
    releaseYear: json.ReleaseYear,
    rating: json.MpaRating,
    category: json.Category,
    duration: json.Duration,
    description: json.Description,
  });
}