type GetHeaderTypeProps = {
  type: string;
  typeValues: {
    public_repos: number;
    followers: number;
    following: number;
  }
}

export function getHeaderType({ type, typeValues }: GetHeaderTypeProps) {
  switch (type) {
    case "/repositories":
      return `${typeValues.public_repos} repositórios`;
    case "/followers":
      return `${typeValues.followers} seguidores`;
    case "/followings":
      return `${typeValues.following} seguindo`;
    default:
      return "Home";
  }
}