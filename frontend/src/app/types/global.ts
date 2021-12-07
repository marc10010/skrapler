
export interface PopupFilterTwitter {
    picker: number;
    fechaIni: Date;
    fechaFin: Date;
    word: string;  
}

export interface DictWordFrequency {
    word: string;
    freq: number;
}

export interface PopUps{
    title: string;
    msg: string;
    cancelBtn: boolean;
}
export interface PopupBlacklistTwitter {
    id: number;
    word: string;
}