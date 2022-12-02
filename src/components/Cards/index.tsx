import { Link } from "react-router-dom";
import { ICardProps } from "./interfaces";
import { Content, Card, Head, Body, Foot } from "./style";

export function Cards({ registros, body }: ICardProps): JSX.Element {
    return (
        <Content>
            {registros?.map((item: any) => (
                <Card key={item.id}>
                    <a href={item.html_url} target="_blank">
                        {body.map((bd: any) => (
                            <span>
                                <Head>{bd.nameHead ? `${bd.nameHead}: ` : ''}{item[bd.valueHead]}</Head>
                                <Body>{bd.nameBody ? `${bd.nameBody}: ` : ''}{item[bd.valueBody]}</Body>
                                <Foot>{bd.nameFoot ? `${bd.nameFoot}: ` : ''}{item[bd.valueFoot]}</Foot>
                            </span>
                        ))}
                    </a>
                </Card>
            ))}
        </Content>
    )
}