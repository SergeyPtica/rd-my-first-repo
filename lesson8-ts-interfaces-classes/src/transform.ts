import type { UserApiResponse } from './types';

export class UserSummary {
    public readonly id: number;
    public readonly fullName: string;
    public readonly city: string;
    public readonly companyName: string;
    public readonly contact: { email: string; phone: string; website: string };
    public readonly geoCoords: { lat: number; lng: number } | null;
    public readonly aggregatedScore: number;

    public constructor(user: UserApiResponse) {
        this.id = user.id;
        this.fullName = `${user.name} (${user.username})`;
        this.city = user.address.city;
        this.companyName = user.company?.name ?? 'N/A';
        this.contact = { email: user.email, phone: user.phone, website: user.website };

        const lat = Number(user.address.geo.lat);
        const lng = Number(user.address.geo.lng);
        this.geoCoords = Number.isFinite(lat) && Number.isFinite(lng) ? { lat, lng } : null;

        this.aggregatedScore =
            this.fullName.length + this.city.length + this.companyName.length + (this.contact.email.length || 0);
    }

    public shortInfo(): string {
        return `${this.fullName} — ${this.companyName}, ${this.city}`;
    }
}
