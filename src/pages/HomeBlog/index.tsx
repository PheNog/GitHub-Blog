import { Header } from "../../components/Header";
import { ProfileBox } from "./components/ProfileBox";
import { ContainerHomerBlog } from "./styles";

export function HomeBlog() {
    return (
        <ContainerHomerBlog>
            <Header />
            <ProfileBox />
        </ContainerHomerBlog>
    
    )
}