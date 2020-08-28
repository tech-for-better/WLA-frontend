type courseCareerPaths = {
  color: string;
};

type Provider = {
  postcode: string;
  name: string;
};

type Course = {
  description: string;
  link: string;
  name: string;
  online_only: boolean;
  postcode: string;
  start_date: string;
  total_price: number;
  strapiId: number;
  career_paths: courseCareerPaths[];
  provider: Provider | null;
};

type CourseEntry = {
  node: Course;
};

type CourseCatalogue = CourseEntry[];

type CareerPath = {
  color: string;
  icon_url: string;
  name: string;
  strapiId: number;
};

type CareerPathEntry = {
  node: CareerPath;
};

type CareerPathCatalogue = CareerPathEntry[];

interface Catalogues {
  careerCatalogue: CareerPathCatalogue;
  courseCatalogue: CourseCatalogue | [];
}

interface SearchResults {
  careerResults: CareerPathCatalogue;
  courseResults: CourseCatalogue | [];
}

interface CareerPathForFilter {
  node: {
    id: number;
    name: string;
  };
}

interface SearchInputProps {
  setSearchTerm: Function;
  setOnlineOnly: Function;
  setSelectedCareer: Function;
  setSortParam: Function;
  careers: CareerPathForFilter[];
}
