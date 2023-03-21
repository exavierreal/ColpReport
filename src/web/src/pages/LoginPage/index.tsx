import { FormBox } from "./Components/FormBox";
import { Header } from "./Components/Header";
import { Page, GreenRectangle, BlueRectangle, SignInBanner } from "./styles";
import { useLoading, Loading } from './Components/Shared/Loading';

export function LoginPage() {
    const { isLoading } = useLoading();

    return (
        <Page>
            {isLoading && <Loading />}
            <SignInBanner>
                <Header />
                <FormBox />
            </SignInBanner>

            <GreenRectangle />
            <BlueRectangle />
        </Page>
    )
}