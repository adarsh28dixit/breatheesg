#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
#define MAX 100000
int countPairsWithDiffK(int arr[], int n, int k)
{
    set<pair<int,int>>s; // Initialize count
 
    // Initialize empty hashmap.
    bool hashmap[MAX] = {false};
 
    // Insert array elements to hashmap
    for (int i = 0; i < n; i++)
        hashmap[arr[i]] = true;
 
    for (int i = 0; i < n; i++)
    {
        int x = arr[i];
        if (x - k >= 0 && hashmap[x - k])
            s.insert({x,x-k});
        if (x + k < MAX && hashmap[x + k])
            s.insert({x,x+k});
        hashmap[x] = false;
    }
    return s.size();
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    int t;
    cin>>t;
    while(t--){
    	int n;
    	cin>>n;
    	int arr[n];
    	for(int i=0;i<n;i++){
    		cin>>arr[i];
    	}
    	int k;
    	cin>>k;
    	
    	cout<<countPairsWithDiffK(arr, n, k);
    }
    return 0;
}