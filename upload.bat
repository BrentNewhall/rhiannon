@echo off

CALL aws s3 cp --recursive build/ s3://rhiannon/
