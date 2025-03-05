export default class Gallery {
  constructor(
    id: number,
    mediaType: string,
    groupName: string,
    pictureDate: string,
    registerDate: string,
  ) {
    this.id = id;
    this.mediaType = mediaType;
    this.groupName = groupName;
    this.pictureDate = pictureDate;
    this.registerDate = registerDate;
  }
  id: number;
  mediaType: string;
  groupName: string;
  pictureDate: string;
  registerDate: string;
}
