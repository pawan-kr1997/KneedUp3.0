import type { FallbackProps } from "react-error-boundary";
import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
        <Button variant="text" onClick={resetErrorBoundary} startIcon={<RefreshIcon />}>
            Try again
        </Button>
    );
};

export default ErrorFallback;
