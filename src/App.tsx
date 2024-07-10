import { QueryClient, QueryClientProvider } from 'react-query'

import { Container } from "./modules/common"
import { TriviaWidgetLoader } from "./modules/trivia/component"

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Container>
                <TriviaWidgetLoader />
            </Container>
        </QueryClientProvider>
    )
}

export default App
