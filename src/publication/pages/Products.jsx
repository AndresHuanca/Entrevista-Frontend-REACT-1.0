import { Main, SearchInput, TitlePage } from "../../components"
import { getEnvVariables } from "../../helpers";
import { usePortfolioStore } from "../../hooks";
import { ProductView } from "../views/ProductView";

export const Products = () => {
    const { VITE_PUB_CAT_START } = getEnvVariables();
    const { publicationsStart } = usePortfolioStore( VITE_PUB_CAT_START );

    return (
        <>
            <Main >
            
            <TitlePage >
                Productos
            </TitlePage>

            <SearchInput />

            <div className="text-center animate__animated animate__fadeIn animate_faster mt-1">
                <div className="row">
                    {
                        publicationsStart.map( ( publication ) =>(
                            <ProductView 
                                key={ publication.id }
                                { ...publication }
                            />
                        ))
                    }
                </div>
            </div>
            

            </Main>
        </>
    )
}
