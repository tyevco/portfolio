
export interface ResumeData {
    personalDetails?: PersonalDetailsData;
    workExperience?: WorkExperienceData[];
    skills?: SkillData[];
    qualifications?: string;
    education?: EducationData[]
}

export interface PersonalDetailsData {
    name?: string;
    phone?: string;
    website?: string;
    github?: string;
    linkedIn?: string;
    email?: string;
    address?: LocationData;
}

export interface LocationData {
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    county?: string;
}

export interface WorkExperienceData {
    company: { name: string, location: string };
    title: string;
    contractor: boolean;
    remote: boolean;
    startDate: Date | string;
    endDate?: Date | string;
    description: string | string[];
}

export interface SkillData {
    skill: string;
    category?: string;
    experience?: string;
}

export interface EducationData {
    school: string;
    field: string;
    degree?: string;
    startDate: Date | string;
    endDate?: Date | string;
    grade?: string;
    activities?: string | string[];
    description?: string;
}