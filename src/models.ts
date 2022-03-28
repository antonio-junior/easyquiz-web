export type Owner = {
  name: string;
};

export type Quiz = {
  id: string;
  title: string;
  dtExpiration?: string | null;
  owner: Owner;
};
