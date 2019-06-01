# some magic to fix mysql
mkdir -p /var/run/mysqld && chown -R mysql:mysql /var/lib/mysql /var/run/mysqld

# start mysql server
service mysql start

mysql -u root < schema.sql

echo "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1111'" | mysql -u root

node server/createData.js

npm start