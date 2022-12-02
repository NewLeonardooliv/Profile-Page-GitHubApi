export interface ICardProps {
    body: cardDataProps[];
    registros?: any;
}

export interface cardRegistroProps {
    data: [];
}

export interface cardDataProps {
    id?: string;
    valueHead?: string;
    valueBody?: string;
    valueFoot?: string;

    nameHead?: string;
    nameBody?: string;
    nameFoot?: string;
}