export interface point {
    type: 'Point';
    coordinates: [number, number];
}

export interface polygon {
    type: 'Polygon';
    coordinates: [Array<[number, number]>]
}

export interface create_order {
    phone_number?: string;
    email?: string;
    region?: string;
    location: point;
    full_address?: string;
    stop_time: number;
    placed?: Date;
    started?: Date;
    arrival_time?: Date;
    arrived?: Date;
    completed?: Date;
}

export interface order extends create_order {
    region: string;
    full_address: string;
    stop_time: number;
    placed: Date;
    arrival_time: Date;
    _id?: string;
}

export interface car {
    _id?: string;
    nickname: string;
    driver?: string;
    region?: string;
    start_time: number;
    start_pos: point;
    orders?: order[];
}

export interface region {
    _id?: string;
    name: string;
    active: boolean;
    bounds: polygon;
    cars: string[];
}
