using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
var 

namespace _01_intro
{
    internal class Program
    {
        static void Main(string[] args)
        {
              Console.WriteLine("1ci Reqemi daxil edin");
              int num1 = Console.ReadLine();   

              Console.WriteLine("2ci Reqemi daxil edin");
              int num2 = Console.ReadLine();   

            int cem = num1 + num2;
            Console.WriteLine("toplama: " + cem);
            
            int ferq = num1 - num2;
            Console.WriteLine("ferq: " + ferq);
            
            int vurma = num1 * num2;
            Console.WriteLine("vurma: " + vurma);
            
            int bolme = num1 / num2;
            Console.WriteLine("bolme: " + bolme);

        }
    }
}
