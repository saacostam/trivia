import { QueryClient, QueryClientProvider } from 'react-query'

import { Container } from "./modules/common"
import { TriviaWidgetGate } from "./modules/trivia/component"

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Container>
                <TriviaWidgetGate />
            </Container>
        </QueryClientProvider>
    )
}

export default App
