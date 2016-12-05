---
title: Laravel and AWS ELB Worker
layout: post
---

I am happy using Laravel to develop application and I am even more happy when I can deploy Laravel application on AWS Elastic BeanStalk. After initial setup, deploying a Laravel application on AWS Elastic Beanstalk is just ```eb deploy``` from the terminal away.

I was converting another application to ELB one day and the application needs to run a schedule job. Laravel already has a very [good way](https://laravel.com/docs/5.1/scheduling) to run schedule job, but it needs to edit your cron entry. One way to do this is to add a yaml configuration into the ELB configuration, however, one needs to be caution about this. It is because if you are running a load balancer and when you have heavy traffic, ELB might spin up multiple instances. With multiple instances running, you might have each instance running a cron job. 

The other solution is to use ELB worker which runs single instance. The following is my configuration. 

## In Laravel 

### Command

Add a [command](https://laravel.com/docs/5.1/artisan#writing-commands) that runs your job.

### Console/Kernel.php

Schedule your job with the [frequency](https://laravel.com/docs/5.1/scheduling#defining-schedules) you need. 

### routes.php

Add a post route call /schedule and call ```Artisan::call('schedule:run')```

### cron.yaml

Add a [cron.yaml](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-tiers.html) file at the application root with the url pointing to ```/schedule``` and the schedule as ```* * * * *```.

## On AWS ELB

### Software Configuration

The same way you do on your Laravel application as a web server.

If everything goes right, your Laravel schedule job on AWS ELB worker should be running the same way you add a cron job into a Linux server. 
