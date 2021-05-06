var admin = 'admin';
var adult = 'adult';
var young = 'young';
var elder = 'elder';

export function isAdmin(role: string): boolean {
    return role === admin;
}

export function isAdult(role: string): boolean {
    return role === adult;
}

export function isYoung(role: string): boolean {
    return role === young;
}

export function isElder(role: string): boolean {
    return role === elder;
}

