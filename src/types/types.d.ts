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
  company: {
    name: string;
  }
}

export type Image = {
  src: string;
}

export type Heading = {
  level: number;
  children: string;
}

export type ThemeState = {
  theme: string;
  toggle: Function;
};

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

export type TypeButton = {
  children: any;
  onClick: Function;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;