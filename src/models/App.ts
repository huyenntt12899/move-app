export interface IConfiguration {
  images: IImages;
  change_keys: string[];
}

interface IImages {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
}

export interface IUrlConfig {
  backdrop: string;
  poster: string;
  profile: string;
}
