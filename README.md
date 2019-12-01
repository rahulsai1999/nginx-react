## Nginx Deploy - React Application (CRA) 

- SSH to server i.e. `ssh root@ip`
- Clone Git Repo (optional)

### Install Nginx
```
sudo apt-get update
sudo apt-get install nginx
sudo mkdir -p /var/www/rahulsai.live/html
sudo chmod -R 755 /var/www
```

### Windows Copy build (optional)
```
# on windows
npm run build
scp -r ./build root@ip:/home/
```
### Deploy on Nginx
```
cp -r /home/build /var/www/rahulsai.live/html/

sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/rahulsai.live

# edit this file and create a symlink

sudo ln -s /etc/nginx/sites-available/rahulsai.live /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# check for error
sudo nginx -t

# restart nginx server

```

## Certbot for HTTPS

### Install Certbot
```
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot python-certbot-nginx
```
### Run Certbot (Auto-add certificate)

```
sudo certbot --nginx
```

### Check auto renewal 
```
sudo certbot renew --dry-run
```