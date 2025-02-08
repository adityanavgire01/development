import java.util.Random;
import java.util.Scanner;

public class BinaryGame {
    public static final Random random = new Random();
    private static final Scanner sc = new Scanner(System.in);
    private static int score = 0;

    public static void main(String[] args) {
        playGame();
        sc.close();
    }

    private static void playGame(){
        System.out.println("\nWelcome to the Binary Conversion Game!");
        System.out.println("Convert the binary number to decimal. Make a mistake and the game ends!");
        System.out.println("Let's begin...\n");

        while(true) {
            // generate binary number
            String binary = generateBinary();
            int correctAnswer = Integer.parseInt(binary, 2);

            // Display binary and get use input
            System.out.println("\nWhat is " + binary + " in decimal?");
            int userAnswer;

            try {
                System.out.println("Your answer: ");
                userAnswer = Integer.parseInt(sc.nextLine());

            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid number!");
                System.out.println("***************--------*********");
                continue;
            }

            // Check answer
            if (userAnswer == correctAnswer) {
                score++;
                System.out.println("Correct! Your score is: " + score);
                System.out.println("----------------------");
                
            } else {
                System.out.println("\nGame Over! That's incorrect.");
                System.out.println("The correct answer was: " + correctAnswer);
                System.out.println("Final score: " +  score);
                break;
            }

            // Get ready for next number
            System.out.println("\nGet ready for the next number");
        }
    }

    private static String generateBinary() {
        // Generate random number between 1 and 255
        int num = random.nextInt(255) + 1;
        // Convert to binary and remove "0b" prefix that Integer.toBinaryString might add
        return Integer.toBinaryString(num);
    }
}