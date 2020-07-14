export interface Author {
  url: string;
  name: string;
}

interface TagItem {
  name: string;
}

interface Job {
  id: string;
  title: string;
  tags: TagItem[];
}

export type Image = {
  src: string;
}

export type DataJobs = { 
  data: { 
    jobs: Job[]; 
    loading: boolean; 
  }; 
}

export type DataJob = {
  data: {
    job: Job;
    index: number;
  }
}

export type Children = {
  children: any;
}