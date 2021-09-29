import { FluidContainer } from "../../components/CommonComponents";

//pass a prop called bookCatalog to this function
export const Books = ({booksCatalog}) => {
    return (
        <FluidContainer>
            {booksCatalog[0] && booksCatalog[0].title 
                ? booksCatalog[0].title
                : "Still loading"}
        </FluidContainer>
    );
};