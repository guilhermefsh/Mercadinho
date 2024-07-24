import { Description, Section, Title } from "./styles"

export const WarrantySection = () => {
    return (
        <Section>
            <h4>Garantia</h4>

            <div>
                <span>
                    <Title>Compra garantida</Title>
                    <Description>Receba o produto que você está esperando ou devolvemos seu dinheiro!</Description>
                </span>
                <span>
                    <Title>Garantia do vendedor</Title>
                    <Description>sem garantia</Description>
                </span>
            </div>

            <a href="#">Saiba mais sobre Garantia</a>
        </Section>
    )
}