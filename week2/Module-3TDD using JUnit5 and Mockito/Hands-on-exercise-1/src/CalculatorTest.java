import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testCalculatorMethods() {
        Calculator1 calc = new Calculator1();

        // Exercise 3: Testing with various assertions
        assertEquals(5, calc.add(2, 3));       // Assert equals
        assertTrue(calc.isPositive(5));       // Assert true
        assertFalse(calc.isPositive(-3));     // Assert false
        assertNull(null);                     // Assert null
        assertNotNull(calc);                  // Assert not null
    }
}
