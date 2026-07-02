import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
//import static junit.framework.TestCase.assertEquals;

//import static org.junit.Assert.assertEquals;

public class CalculatorFixtureTest1 {
    private Calculator1 calc;

    @Before
    public void setUp() {
        calc = new Calculator1();
        System.out.println("[SETUP]: Fresh Calculator instance initialized.");
    }

    @After
    public void tearDown() {
        calc = null;
        System.out.println("[TEARDOWN]: Calculator instance cleared from memory.");
    }
    @Test
    public void testAdditionPattern() {
        System.out.println("[RUNNING TEST]: testAdditionPattern");

        // ARRANGE
        int a = 10;
        int b = 20;

        // ACT
        int result = calc.add(a, b);

        // ASSERT
        assertEquals(30, result);
    }

    @Test
    public void testPositivityPattern() {
        System.out.println("[RUNNING TEST]: testPositivityPattern");

        // ARRANGE
        int testValue = 42;

        // ACT
        boolean status = calc.isPositive(testValue);

        // ASSERT
        assertTrue(status);
    }
}
