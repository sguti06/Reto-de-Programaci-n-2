// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos necesarios
    const inputNumber = document.getElementById("inputNumber");
    const generateBtn = document.getElementById("generateBtn");
    const result = document.getElementById("result");
  
    // Añadir el evento al botón
    generateBtn.addEventListener("click", function () {
      const number = parseInt(inputNumber.value);
  
      // Validar entrada
      if (isNaN(number) || number < 0) {
        result.textContent = "Por favor, ingresa un número entero positivo.";
        return;
      }
  
      // Generar secuencia de Fibonacci
      const fibonacciSequence = generateFibonacci(number);
  
      // Mostrar resultado
      result.textContent = `Secuencia de Fibonacci: ${fibonacciSequence.join(", ")}`;
    });
  
    // Función para generar la secuencia de Fibonacci
    function generateFibonacci(n) {
      if (n < 0) return [];
  
      const sequence = [0, 1];
      let i = 2;
  
      while (sequence[i - 1] + sequence[i - 2] <= n) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
        i++;
      }
  
      return sequence.filter((num) => num <= n);
    }
  });
  