export interface RepertoirInterface {
  id: string,
  section: string,
  title: string,
  type: string,
  image: string,
  bigImage: string,
  closePlays: ClosePlayInterface[],
  description: string,
  fullDescription: string,
  long: string,
  antracts: string,
  premier: string,
  people: PeoplePlayInterface[],
  gallery: string[]
}

export interface ClosePlayInterface {
  date: string,
  place: string
}

export interface PeoplePlayInterface {
  name: string,
  job: string,
}