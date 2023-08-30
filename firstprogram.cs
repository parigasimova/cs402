using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pari
{
    internal class Program
    {
        static void Main(string[] args)
        //--------İki ədədin cəmi--------------------------------------------------------------
        {
            void Cem(int x, int y)
            {
                int cem = x + y;
                Console.WriteLine("İki ededin cemi-" + cem);
            }
            Cem(5, 4);
            //---------İki ədədin cəmi ilə fərqinin hasilini tapan funksiya---------------------------------------------------------
            void Hasil(int a, int b)
            {
                int c = a + b;
                int f = a - b;
                int p = c * f;
                Console.WriteLine("İki ededin cemi ile ferqinin hasilini tapan funksiya-" + p);

            }
            Hasil(13, 11);
            //----------- {"salam","masin","buz","ev","kod","meymun","avtobus"} arrayinda 4 hərfdən az olan sözləri çapa verən proqram tərtib edin.
            String[] arr1 = { "salam", "masin", "buz", "ev", "kod", "meymun", "avtobus" };
            for (int i = 0; i < arr1.Length; i++)
            {
                if (arr1[i].Length < 4)
                {
                    Console.WriteLine(" 4 herfdən az olan sozleri çapa ver-" + arr1[i]);

                }
            }
            //----------{"salam","masin","buz","ev","kod","meymun","avtobus"} arrayinda 4 hərfdən çox olan sözlərin sonuna AZE ifadəsini əlavə edərək çapa verən proqram tərtib edin
            for (int q = 0; q < arr1.Length; q++)
            {
                if (arr1[q].Length > 4)
                {
                    Console.WriteLine(" 4 herfdən çox olan sozlerin sonuna AZE ifadesini elave ederek çapa ver-" + arr1[q] + "AZE");

                }
            }
            //-----------{"salam","masin","buz","ev","kod","meymun","avtobus"} arrayinda olan elementləri çapa verən proqram tərtib edin.
            for (int n = 0; n < arr1.Length; n++)
            {
                Console.WriteLine(" elementleri çapa veren proqram tertib edin-" + arr1[n]);
            }
            //------------ {"salam","masin","buz","ev","kod","meymun","avtobus"} arrayinin elemetlərini arasında boşluqlar olmaq şərti ilə yan-yana düzən proqram tərtib edin.
            Console.WriteLine("elemetlərini arasında boşluqlar olmaq şərti ilə yan-yana düzən proqram");
            for (int t = 0; t < arr1.Length; t++)
            {
                Console.Write(arr1[t] + " ");
            }
            Console.WriteLine();
            //--------------- 0-dan 100-ə qədər olan ədədləri çapa verən proqram tərtib edin--------------------------------------------
            Console.WriteLine("0-dan 100-e qeder olan ededleri çapa veren proqram tertib edin.");
            for (int r = 0; r <= 100; r++)
            {
                Console.WriteLine(r);
            }
            //---------------------0-dan 100-ə qədər olan cüt ədədləri çap edən proqram tərtib edin.-------------------------------------------------------
            Console.WriteLine("0-dan-100e qeder olan cut ededleri capa veren proqram tertib edin");
            for (int u = 0; u <= 100; u++)
            {
                if (u % 2 == 0)
                {
                    Console.WriteLine(u);
                }
            }
            //------------------------0-dan 100-ə qədər olan tək ədədlərin cəmini tapan proqram tərtib edin.-------------------------
            Console.WriteLine("0-dan 100-e qeder olan tek ededlerin cemini tapan proqram tertib edin.");


            int tek = 0;

            for (int o = 0; o <= 100; o += 2)
            {
                tek += o;
            }

            Console.WriteLine("Cem: " + tek);
            //------------------------------- 0-dan 100-ə qədər olan ədədlər içərisində rəqəmləri bir birinə bərabər olan iki rəqəmli ədədləri çap edən proqram tərtib edin.
            Console.WriteLine(" 0-dan 100-ə qədər olan ədədlər içərisində rəqəmləri bir birinə bərabər olan iki rəqəmli ədədləri çap edən proqram tərtib edin.");
            for (int c=1; c <= 100; c++)
            {
                int onluq = c / 10;
                int teklik = c % 10;
                if(teklik == onluq)
                {
                    Console.WriteLine(c);
                }
            }
//------------------ İstənilən arrayin 1-ci elementini çapa verən funksiya yazın. Funksiya arraylari parametr olaraq alacaq
            Console.WriteLine("İstənilən arrayin 1-ci elementini çapa verən funksiya yazın. Funksiya arraylari parametr olaraq alacaq");
             int IlkElement(int[] array)
            {
                return array[0];
            }
            int[] siyahi= { 68, 15, 25, 84 };
            int firstelement = IlkElement(siyahi);
            Console.WriteLine(firstelement);

//----------İstənilən arrayin sonuncu elementini çapa verən funksiya yazın. Funksiya arraylari parametr olaraq alacaq.
            Console.WriteLine("İstənilən arrayin sonuncu elementini çapa verən funksiya yazın. Funksiya arraylari parametr olaraq alacaq.");

            int SonElement(int[] array)
            {
                return array[array.Length-1];
            }
            
            int Lasttelement = SonElement(siyahi);
            Console.WriteLine(Lasttelement);

        }
    }
}
    