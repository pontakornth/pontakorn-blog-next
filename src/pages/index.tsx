import tw, { styled } from 'twin.macro'
import { H1 } from '../components/elements/Heading'

const Container = styled.div({
  ...tw`flex flex-col items-center justify-center h-screen`,
  variants: {
    hasBackground: {
      true: tw`bg-gradient-to-b from-electric to-ribbon`,
    },
  },
})

const ButtonBox = tw.div`flex flex-col justify-center h-full gap-y-5`

const IndexPage = () => (
  <Container>
    <H1>Pontakorn Blog</H1>
  </Container>
)

export default IndexPage
