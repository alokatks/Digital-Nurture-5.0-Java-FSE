import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    // Initializing the SLF4J logger instance for this class
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        System.out.println("--- Executing SLF4J Logging Exercise ---");

        // Logging an error message level
        logger.error("This is an error message");

        // Logging a warning message level
        logger.warn("This is a warning message");
    }
}

