export interface MenuProps {
    profile: ProfileProps
    socialMedias: any
}

export interface ProfileProps {
    login?: string,
    id?: number,
    avatar_url?: string
    gravatar_id?: string,
    html_url?: string,
    repos_url?: string,
    received_events_url?: string,
    type?: string,
    name?: string,
    company?: string,
    location?: string,
    hireable?: string,
    bio?: string,
    blog?: string
}