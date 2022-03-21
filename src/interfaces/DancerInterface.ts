export interface DancerInterface {
  name: string,
  job: string,
  career: string,
  image: string,
  repertoir: DancerPlayInterface[]
}

export interface DancerPlayInterface {
  image: string,
  title: string,
  description: string,
  id: string,
}