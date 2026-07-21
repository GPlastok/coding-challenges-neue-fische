export interface Volunteer {
  id: number;
  name: string;
}

export function formatVolunteer(name: string): string {
  return name.trim().toUpperCase();
}
