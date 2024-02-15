class School {
    private _areas: string[] = [];
    private _lecturers: any[] = [];

    get areas(): string[] {
        return this._areas;
    }

    get lecturers(): any[] {
        return this._lecturers;
    }

    addArea(newArea: string): void {
        this._areas.push(newArea);
    }

    removeArea(index: number): void {
        this._areas.splice(index, 1);
    }

    addLecturer(newLecturer: any): void {
        this._lecturers.push(newLecturer);
    }

    removeLecturer(index: number): void {
        this._lecturers.splice(index, 1);
    }
}

class Area {
    private _levels: any[] = [];
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get levels(): any[] {
        return this._levels;
    }

    addLevel(newLevel: any): void {
        this._levels.push(newLevel);
    }

    removeLevel(index: number): void {
        this._levels.splice(index, 1);
    }
}

class Level {
    private _groups: any[] = [];
    private _name: string;
    private _description: string;

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get groups(): any[] {
        return this._groups;
    }

    addGroup(newGroup: any): void {
        this._groups.push(newGroup);
    }

    removeGroup(index: number): void {
        this._groups.splice(index, 1);
    }
}

class Group {
    private _area: string;
    private _status: string;
    private _students: any[] = [];
    private _description: string = ''; // Добавим инициализацию _description

    constructor(private _directionName: string, private _levelName: string) {
        this._area = '';
        this._status = '';
    }

    get directionName(): string {
        return this._directionName;
    }

    get levelName(): string {
        return this._levelName;
    }

    get status(): string {
        return this._status;
    }

    setStatus(newStatus: string): void {
        this._status = newStatus;
    }

    addStudent(newStudent: any): void {
        this._students.push(newStudent);
    }

    removeStudent(index: number): void {
        this._students.splice(index, 1);
    }

    showPerformance(): any[] {
        const sortedStudents = this._students.slice().sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }
}

class Student {
    private _firstName: string;
    private _lastName: string;
    private _birthYear: number;
    private _grades: Record<string, number> = {};
    private _visits: boolean[] = [];

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value: string) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    get age(): number {
        return new Date().getFullYear() - this._birthYear;
    }

    setGrade(workName: string, mark: number): void {
        this._grades[workName] = mark;
    }

    setVisit(lesson: number, present: boolean): void {
        this._visits[lesson] = present;
    }

    getPerformanceRating(): number {
        const gradeValues: number[] = Object.values(this._grades);

        if (!gradeValues.length) return 0;

        const averageGrade: number = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage: number = (this._visits.filter((present: boolean) => present).length / this._visits.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}