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
  description: string;
  tags: TagItem[];
  slug: string;
  locationNames: string;
  commitment: {
    title: string;
  };
  company: {
    name: string;
    slug: string;
    websiteUrl: string;
  };
}

export type Image = {
  src: string;
}

export type Heading = {
  level: number;
  children: any;
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
    modalOpen: Function;
  }
}

export type DataJobDetails = {
  data: {
    job: Job;
    index: number;
  }
}

export type Children = {
  children: any;
}

export type TypeText = {
  children: any;
  className?: any;
} & React.ParamHTMLAttributes<HTMLParagraphElement>;

export type TypeButton = {
  children: any;
  onClick: Function;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type TypeInput = {
  onChange: Function;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type EventSelectElement = React.FormEvent<HTMLSelectElement>;

export type TypeSelect = {
  children: any;
  onChange: Function;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export type TypeModal = {
  data: {
    modalVisible: boolean;
    modalClose: Function;
    modalContent: React.FunctionComponentElement<{}>;
  }
}

type TypeThemeSwitcher = {
  data: {
    theme: String;
    toggle: Function;
  }
}