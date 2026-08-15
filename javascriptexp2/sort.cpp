#include <iostream>
using namespace std;

/**
 * This program sorts an array of integers using the counting sort algorithm.
 * The input array is read from stdin: first `n`, then `n` integers.
 */

int main(){
    int n;
    if(!(cin >> n)) return 0;
    int arr[n];
    for (int i = 0; i < n; i++){
        cin >> arr[i];
    }

    int max = arr[0];
    for(int i = 1; i < n; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    int count[max + 1];
    for(int i = 0; i <= max; i++){
        count[i]=0;
    }
    for (int j = 0; j < n; j++){
        count[arr[j]]++;
    }

    int cumulative_count[max + 1];
    cumulative_count[0] = count[0];
    for (int i = 1; i <= max; i++){
        cumulative_count[i] = cumulative_count[i - 1] + count[i];
    }

    int output[n];
    for (int i = n - 1; i >= 0; i--){
        output[cumulative_count[arr[i]] - 1] = arr[i];
        cumulative_count[arr[i]]--;
    }
    for (int i = 0; i < n; i++){
        cout<<output[i]<<" ";
    }
    cout << endl;
    return 0;
}