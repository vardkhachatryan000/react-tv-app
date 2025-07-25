export class MovieData {
  constructor({ id, title, titleImage, description, coverImage, logo, category, releaseYear, rating, duration, videoUrl, date }) {
    this.id = id;
    this.title = title;
    this.titleImage = titleImage;
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

export function mapToData(json) {
  return new MovieData({
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
    videoUrl: json.VideoUrl,
    description: json.Description,
  });
}
