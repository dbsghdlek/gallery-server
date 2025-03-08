export default class Gallery {
  constructor(
    id: number,
    mediaType: string,
    groupName: string,
    fileName: string,
    thumbnail: string,
    pictureDate: string,
    registerDate: string,
  ) {
    this.id = id;
    this.mediaType = mediaType;
    this.fileName = fileName;
    this.groupName = groupName;
    this.thumbnail = thumbnail;
    this.pictureDate = pictureDate;
    this.registerDate = registerDate;
  }
  id: number;
  mediaType: string;
  groupName: string;
  fileName: string;
  thumbnail: string;
  pictureDate: string;
  registerDate: string;
}
