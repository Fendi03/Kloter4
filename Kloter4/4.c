int main()
{
    int sisi,i,j;
printf("masukkan Jumlah Sisi: ");
scanf("%d",&sisi);
    for(i=0; i<sisi; i++)
    {
        for(j=0; j<sisi; j++)
        {
            if(i==0 || i==sisi-1)
            {
                printf("*");
            }
            else
            {
                if(j==0 || j==sisi-1)
                {
                    printf("#");
                }
                else
                {
                    printf("=");
                }
            }
        }
        printf("\n");
    }

    return 0;
}