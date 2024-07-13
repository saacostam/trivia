import { QueryClient, QueryClientProvider } from 'react-query'

import { Container } from "./modules/common"
import { TriviaPage } from './pages';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Container>
                <TriviaPage />
            </Container>
        </QueryClientProvider>
    )
}

export default App
