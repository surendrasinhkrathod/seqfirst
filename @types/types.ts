export interface ITeamBio {
  imageUrl: string;
  name: string;
  title: string;
  bio: string;
}

export interface ITeam {
  title: string;
  description?: string;
  teamMain: ITeamBio[];
  teamSecondary: ITeamBio[];
}

export interface IHomeTeam {
  title: string;
  description?: string;
  teamMain: ITeamBio[];
}

export interface IHome {
  hero: IHomeHero[];
  videoIntro: IVideoIntro[];
  partners: IPartners[];
  programs: IPrograms[];
  learnMore: ILearnMore[];
  team: ITeamBio[];
}

export interface IHomeHero {
  id: number;
  imageUrl: string;
  title: string;
  title2: string;
  buttonLabel: string;
}

export interface IProjectHero {
  id: number;
  imageUrl: string;
  title: string;
}

export interface IFAQ {
  id: number;
  title: string;
  imageUrl: string;
  body: IFAQRepeater[];
}

export interface IFAQRepeater {
  headline: string;
  body: string;
}

export interface IPartners {
  id: number,
  headline: string;
  partner: IParternTile[];
}

export interface IParternTile {
  imageUrl: string;
  imageAlt: string;
  url: string;
}

export interface INewborn {
  hero: IProjectHero[];
  fiftyfifty: IFiftyFifty[];
  FAQ: IFAQ[];
  learnMore: ILearnMore[];
}

export interface IDevelopmentalDifferences {
  hero: IProjectHero[];
  fiftyfifty: IFiftyFifty[];
  FAQ: IFAQ[];
}

export interface IFiftyFifty {
  id: number;
  imageUrl: string;
  imageAlt: string;
  width: number,
  height: number,
  title: string;
  body: string;
}

export interface IPrograms {
  id: number;
  imageUrl: string;
}

export interface IResourceTile {
  imageUrl: string;
  title: string;
  body: string;
  url: string;
}

export interface ILearningCenter {
  hero: ISimpleHero[];
  resources: IResourceTile[];
  learnMore: ILearnMore[];
}

export interface ISimpleHero {
  title: string;
  description?: string;
}

export interface IVideoIntro {
  id: number;
  sections: IVideoSections[];
  videoUrl: string;
}

export interface IVideoSections {
  headline: string;
  body: string;
}

export interface ILearnMore {
  id: number;
  headline: string;
  body: string;
  linkUrl?: string;
  linkText?: string;
  tile: ILearnMoreTile[];
}

export interface ILearnMoreTile {
  imageUrl: string;
  title: string;
  body: string;
  videoUrl: string;
}

export interface IEnroll {
  hero: IHomeHero[];
  videoIntro: IVideoIntro[];
  textColumn: ITextColumn[];
}

export interface IContact {
  pageTitle: string;
  heading: string;
  body: string;
  address: IContactAddress[];
  email: string;
  phone: string;
  phoneUrl: string;
  description: string;
}

export interface IContactAddress {
  name: string;
  line1: string;
  line2: string;
  cityStateZip: string;
}

export interface ITextColumn {
  id: number;
  title: string;
  description: string;
}
