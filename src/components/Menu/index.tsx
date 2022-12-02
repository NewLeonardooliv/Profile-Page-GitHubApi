import { Social } from "../../pages/Profile/Style";
import { MenuProps } from "./interfaces";
import { AtualPage, Bar, Bio, Line, Name, Nav } from "./style";

export function Menu({ profile, socialMedias }: MenuProps) {
    return (
        <Bar>
            <Name>
                {profile.name}
            </Name>
            <img src={profile.avatar_url} alt="" />
            <Bio>
                {profile.bio}
            </Bio>
            <Social>
                <a href={socialMedias.GITHUB.url} target="_blank"><img src={socialMedias.GITHUB.image.source} alt={socialMedias.GITHUB.image.alt} /></a>
                <a href={socialMedias.LINKEDIN.url} target="_blank"><img src={socialMedias.LINKEDIN.image.source} alt={socialMedias.LINKEDIN.image.alt} /></a>
                <a href={socialMedias.INSTAGRAM.url} target="_blank"><img src={socialMedias.INSTAGRAM.image.source} alt={socialMedias.INSTAGRAM.image.alt} /></a>
                <a href={socialMedias.FACEBOOK.url} target="_blank"><img src={socialMedias.FACEBOOK.image.source} alt={socialMedias.FACEBOOK.image.alt} /></a>
            </Social>
            <Line />
            <Nav>
                <AtualPage><a href="/">Início</a></AtualPage>
            </Nav>
            <Line />
        </Bar>
    )
}